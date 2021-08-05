import React, {useRef} from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import {
  CustomText as Text,
  LoadingIndicator,
  ScreenContainer,
} from '../../components';
import Cancel from '../../assets/icons/Cancel';
import {updateNote, addNotesToPdf} from '../../api/notes';
import {useGlobalContext} from '../../utils/globalContext';
import {showToast} from '../../utils/functions';
import {CommonActions} from '@react-navigation/native';

const EditNoteScreen = ({navigation, route: {params}}) => {
  const {dispatch} = useGlobalContext();
  const textInput = useRef();
  const editedNote = useRef(params.noteContent);

  const handleSave = () => {
    dispatch({type: 'loading', payload: LoadingIndicator});
    if (params.type == 'UPDATE') {
      updateNote(params.noteId, editedNote.current)
        .then((response) => {
          if (response.data.response == 101) {
            dispatch({type: 'loading', payload: false});
            showToast('Note Updated Successfully');
            toNotesListingWithReload(2);
          } else throw 'Note could not be updated';
        })
        .catch((err) => dispatch({type: 'error', payload: err}));
    } else {
      addNotesToPdf(params.pdfId || 0, editedNote.current)
        .then((response) => {
          if (response.data.response == 102) {
            dispatch({type: 'loading', payload: false});
            showToast('Note Added Successfully');
            if (params.pdfId) navigation.goBack();
            else toNotesListingWithReload(1);
          } else throw 'Note could not be created';
        })
        .catch((err) => dispatch({type: 'error', payload: err}));
    }
  };

  const toNotesListingWithReload = (num) =>
    navigation.dispatch((state) => {
      const routes = [...state.routes];
      routes.splice(-num, num);
      routes.find(
        (element) => element.name == 'NotesListing',
      ).params.reload = true;
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });

  const focusOnEdit = () => {
    if (!textInput.current) {
      textInput.current.blur();
      setTimeout(() => textInput.current.focus(), 100);
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.topBar}>
        <Cancel onPress={navigation.goBack} />
        <Text style={styles.save} onPress={handleSave}>
          SAVE
        </Text>
      </View>
      <Pressable onPress={focusOnEdit} style={styles.editContainer}>
        <TextInput
          ref={textInput}
          style={styles.edit}
          multiline={true}
          defaultValue={params.noteContent}
          autoFocus={true}
          onChangeText={(text) => (editedNote.current = text)}
        />
      </Pressable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    marginHorizontal: 10,
  },
  save: {
    fontFamily: 'Bold-700',
    color: '#3458A1',
  },
  editContainer: {
    height: '90%',
    margin: 18,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  edit: {
    fontFamily: 'Assistant',
    fontSize: 17,
  },
});

export default EditNoteScreen;
