import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  console.log('navi');
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    console.log('else');
  }
}
