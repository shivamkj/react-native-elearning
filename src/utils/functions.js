import Toast from 'react-native-simple-toast';

const showToast = message => Toast.show(message);

const isValidEmail = email =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const navigate = (item, navigation) => {
  switch (item.type) {
    case '0':
      navigation.navigate('PdfViewer', {
        id: item.id,
        title: item.title,
        link: item.path,
      });
      break;
    case '1':
      navigation.navigate('VideoPlayer', {title: item.title, link: item.path});
      break;
    case '2':
      navigation.navigate('TestInstruction', {
        name: item.title,
        maxMark: item.examInfo.total_marks,
        questions: item.examInfo.total_qtn,
        time: item.examInfo.exam_duration,
        examId: item.id,
        eid: item.examInfo.eid,
      });
      break;
  }
};

const delay = n =>
  new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });

export {showToast, isValidEmail, navigate, delay};
