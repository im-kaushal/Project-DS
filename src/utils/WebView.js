import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Strings from '../constants/Strings';
const MyWebView = () => {
  // const [isLoading, setIsLoading] = useState(true);

  //   const htmlContent = `
  //     <html>
  //       <body>
  //         <h1>Loading...</h1>
  //       </body>
  //     </html>
  //   `;

  //   const renderLoadingIndicator = () => (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );

  return (
    <View style={{flex: 1}}>
      {/* {isLoading && renderLoadingIndicator()} */}
      <WebView
        source={{uri: Strings.user_github}}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={{flex: 1}}
        // onLoad={() => setIsLoading(false)}
        // renderLoading={<ActivityIndicator size="large" />}
      />
    </View>
  );
};

export default MyWebView;
