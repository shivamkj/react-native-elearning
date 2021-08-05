import React, {useEffect, useState} from 'react';
import CoursesAndExams from './CoursesAndExams';
import {getPurchasedCourses} from '../../api/afterPurchase';
import Feeds from './Feeds';

const ExploreScreen = ({navigation}) => {
  const [purchasedCourses, setPurchasedCourses] = useState(null);

  useEffect(() => {
    getPurchasedCourses().then(result => {
      console.log(result.data);
      if (result.data.response == 301) {
        setPurchasedCourses(false);
        return;
      }
      if (result.data.response != 100) return;
      if (result.data.course.length > 1) setPurchasedCourses(false);
      else setPurchasedCourses(false);
    });
  }, []);

  if (purchasedCourses)
    return (
      <Feeds navigation={navigation} purchasedCourses={purchasedCourses} />
    );
  else if (purchasedCourses == false)
    return <CoursesAndExams navigation={navigation} />;
  else return null;
};

export default ExploreScreen;

/* <SectionList
  ListHeaderComponent={() => <AppCarousel data={banner} />}
  sections={[
    { title: "Top Courses", data: data.courses },
    { title: "Free Resources for you", data: data.freeResources },
  ]}
  renderSectionHeader={({ section }) => (
    <>
      <Text style={styles.heading}>{section.title}</Text>
      <FlatList
        data={section.data}
        renderItem={renderRow}
        keyExtractor={(item) => item.course_id || item.exam_id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  )}
  renderItem={({ _ }) => <View></View>}
  keyExtractor={(item) => item.course_id || item.exam_id}
/> */

// const renderRow = ({ item }) => {
//   if (item.course_id)
//     return (
//       <TouchableHighlight
//         underlayColor={defaultStyles.colors.light}
//         onPress={() => navigation.push("CourseDetails", { courseId: item.course_id })}
//       >
//         <View style={[styles.card, defaultStyles.shadowLight]}>
//           <Image
//             style={styles.thumbnail}
//             source={{ uri: item.course_img }}
//             resizeMode="stretch"
//           />
//           <Text style={styles.title} numberOfLines={2}>
//             {item.course_title}
//           </Text>
//         </View>
//       </TouchableHighlight>
//     );
//   return (
//     <View style={[styles.card, defaultStyles.shadowLight, styles.resourcesCard]}>
//       <View style={styles.top}>
//         <Image style={styles.icon} source={require("../assets/exam.png")} />
//         <Text style={styles.type}>TEST</Text>
//       </View>
//       <Text style={styles.title} numberOfLines={2}>
//         {item.exam_title}
//       </Text>
//       <Button
//         btnStyle={styles.attempt}
//         color="#44AF69"
//         title="Attempt Now"
//         onPress={() => navigation.navigate("TestInstruction")}
//       />
//     </View>
//   );
// };
