import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, StyleSheet, TextInput} from 'react-native';
import dayjs from 'dayjs';
import {
  TopHeader,
  ScreenContainer,
  OptionsPicker,
  LoadingIndicator,
  ListItemSeparator,
  CustomText as Text,
  withEmptyState,
  Touchable,
} from '../../components';
import {colors, defaultStyles} from '../../config';
import {ArrowDown, Search} from '../../assets/icons';
import {getNotes, deleteNote} from '../../api/notes';
import {showToast} from '../../utils/functions';
import NoteList from './views/NoteList';
import {useGlobalContext} from '../../utils/globalContext';
import NotesListing from '../../ShimmerLayouts/NotesListing';

const sortOptions = ['Recently updated', 'Date'];

const NotesListingScreen = ({navigation, route: {params}, setEmpty}) => {
  const {dispatch} = useGlobalContext();
  const [notes, setNotes] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [reload, setReload] = useState(false);
  const search = useRef(null);

  useEffect(() => {
    dispatch({type: 'loading', payload: NotesListing});
    getNotes(params.courseId)
      .then(result => {
        if (result.data.response == 100) setNotes(result.data.data);
        else if (result.data.response == 203)
          setEmpty({
            name: params.title,
            title: 'Note Unavailable',
            description: 'No Notes available for this course.',
          });
        dispatch({type: 'loading', payload: false});
      })
      .catch(err => dispatch({type: 'error', payload: err}));
  }, [reload]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (params.reload == true) {
        setReload(prev => !prev);
        params.reload = false;
      }
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (sortBy == null) return;
    const newNotes = [...notes];
    let sortOption;
    if (sortBy == 0) sortOption = 'updated_on';
    else if (sortBy == 1) sortOption = 'created_on';
    newNotes.sort((note1, note2) => {
      const date1 = dayjs(note1[sortOption]);
      const date2 = dayjs(note2[sortOption]);
      return date2.diff(date1, 'm');
    });
    setNotes(newNotes);
  }, [sortBy]);

  const handleSearch = () => {
    if (!search.current) return;
    const query = search.current.toLowerCase();
    const filteredNotes = notes.filter(note => {
      if (note.pdf_title.toLowerCase().includes(query)) return true;
      return false;
    });
    setNotes(filteredNotes);
  };

  const handleDelete = id => {
    dispatch({type: 'loading', payload: LoadingIndicator});
    deleteNote(id)
      .then(response => {
        if (response.data.response == 104) {
          const filteredNotes = notes.filter(note => note.note_id != id);
          setNotes(filteredNotes);
          showToast('Note deleted successfully');
        } else {
          showToast('Note could Not Delete');
        }
        dispatch({type: 'loading', payload: false});
      })
      .catch(err => dispatch({type: 'error', payload: err}));
  };

  const toNoteSingle = (title, noteContent, noteId) =>
    navigation.navigate('NoteSingle', {title, noteContent, noteId});

  const renderItem = ({item}) => (
    <NoteList
      item={item}
      handleDelete={handleDelete}
      toNoteSingle={toNoteSingle}
    />
  );

  if (!notes) return null;
  return (
    <ScreenContainer>
      <TopHeader title={params.title} onBackPress={navigation.goBack} />
      <View style={styles.topContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by title"
            onChangeText={value => (search.current = value)}
            onEndEditing={handleSearch}
          />
          <Search onPress={handleSearch} />
        </View>
        <Touchable
          onPress={() => setPickerVisible(true)}
          style={styles.sortContainer}>
          <Text style={styles.sort}>Sort By</Text>
          <ArrowDown />
        </Touchable>
      </View>
      <Text style={styles.delete}>Swipe Right to delete notes.</Text>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.note_id}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <Touchable
        style={defaultStyles.floatingBtn}
        onPress={() =>
          navigation.navigate('EditNote', {type: 'new', noteContent: ''})
        }>
        <Text style={styles.plus}>+</Text>
      </Touchable>
      <OptionsPicker
        visible={pickerVisible}
        setVisible={setPickerVisible}
        options={sortOptions}
        setSlectedOption={setSortBy}
        style={{top: 140, right: 0}}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.sectionBackground,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'SemiBold-600',
    fontSize: 15,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sort: {
    fontFamily: 'SemiBold-600',
    fontSize: 15,
    marginRight: 6,
  },
  delete: {
    marginVertical: 6,
    fontSize: 14,
    textAlign: 'center',
  },
  plus: {
    position: 'relative',
    bottom: '30%',
    color: '#ffffff',
    fontSize: 60,
  },
});

export default withEmptyState(NotesListingScreen);
