// import React from 'react';
// import {Button, View, Text} from 'react-native';
// import {connect} from 'react-redux';
// import {removeFromCart} from '../actions/CartAction';

// const CartContainer = items => {
//   return (
//     <View>
//       <Text>Your Cart:</Text>
//       {items.map(item => (
//         <View key={item.id}>
//           <Text>{item.name}</Text>
//           <Text>{item.price}</Text>
//           <Button title="Remove" onPress={() => removeFromCart(item.id)} />
//         </View>
//       ))}
//     </View>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     items: state.items,
//   };
// };

// const mapDispatchToProps = {
//   removeFromCart,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
