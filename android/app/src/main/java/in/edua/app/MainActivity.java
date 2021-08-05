package in.edua.app;

import com.facebook.react.ReactActivity;
// EXTERNAL - react-native-splash-screen
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends ReactActivity {
    // EXTERNAL - react-native-splash-screen
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this); 
      super.onCreate(savedInstanceState);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Edua";
  }
}
