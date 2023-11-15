import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ColorSpace } from "react-native-reanimated";
import Colors from "../../../assets/Shared/Colors";

export default function Carousel() {
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  //images for carousel
  const carouselData = [
    {
      id: "01",
      image: require("../../../assets/pictiures-for-carousel/sale1.jpeg"),
    },
    {
      id: "02",
      image: require("../../../assets/pictiures-for-carousel/sale2.jpeg"),
    },
    {
      id: "03",
      image: require("../../../assets/pictiures-for-carousel/sale3.jpeg"),
    },
  ];
  //auto scroll
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  //handle scroll event
  const handleScroll = (event) => {
    //get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    //get index of current active icon
    const index = Math.trunc(
      (scrollPosition / Dimensions.get("window").width) * 1.19
    );
    //update index
    setActiveIndex(index);
  };

  //render one image
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.image} style={styles.carousel_image} />
      </View>
    );
  };
  //render dot indicator
  const renderDotIndocators = () => {
    //if the active index === index
    return carouselData.map((dot, index) => {
      return (
        <View
          style={[
            styles.dot_style,
            {
              backgroundColor:
                activeIndex === index ? Colors.black : Colors.dark_gray,
            },
          ]}
          key={dot.id}
        ></View>
      );
    });
  };

  return (
    <View style={{ alignItems: "center", margin: 10 }}>
      <View style={{ width: "90%" }}>
        <FlatList
          data={carouselData}
          renderItem={renderItem}
          ref={flatlistRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={handleScroll}
        />
        <View style={styles.dot_container}>{renderDotIndocators()}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel_image: {
    width: Dimensions.get("window").width * 0.85,
    height: 180,
    borderRadius: 10,
    marginRight: 2,
  },
  dot_style: {
    height: 10,
    width: 10,
    borderRadius: 99,
    marginHorizontal: 3,
  },
  dot_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});
