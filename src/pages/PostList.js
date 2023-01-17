import { React, useState } from "react";
import Stack from 'react-bootstrap/Stack';

function PostList() {
  let TitleList = ["글제목1", "글제목2", "글제목3"]

  let [Title, setTitle] = useState(TitleList);
  // let [Contents, setContents] = useState(["글내용1", "글내용2", "글내용3"]);
  
  return (
    <>
      <div className="home-container">
          <div className="container-main">
          {
            TitleList.map(function (a, i) {
              return (
                <Stack gap={10}>
                      <div className="post">{TitleList[i]}</div>
                </Stack>
              )
            })
          }
          
          

          
        </div>
      </div>
            
    </>
  );
}

// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

// const Item = ({title}: any) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const Item = TitleList.map(function (a, i) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   )
// })

// const App = () => {
//   const renderItem = item => <Item title={item.title} />;

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id} 
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });


export default PostList;



{/* SafeAreaView 사용법
<SafeAreaView style={styles.container}>
  <FlatList
    data={DATA} // 필수 Props
    renderItem={renderItem} // 필수 Props
    keyExtractor={item => item.id}
    numColumns={2} // Multiple Columns
    horizontal={false} // numColumns를 사용할 때 값을 false로 지정해줘야 한다.
    ListHeaderComponent={<Header />} // Header
  />
</SafeAreaView> 
*/}