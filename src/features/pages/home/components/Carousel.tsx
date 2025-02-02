import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import homeStyles from "../styles";

interface CarouselProps {
  data: string[];
  width?: number;
  height?: number;
}
const { width: screenWidth } = Dimensions.get("window");

const Carousel: React.FC<CarouselProps> = ({
  data,
  width = screenWidth - 32,
  height = 210,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };

  const renderItem = ({ item }: { item: string }) => (
    <View style={[homeStyles.itemContainer, { width, height }]}>
      <Image source={{ uri: item }} style={homeStyles.image} />
    </View>
  );

  return (
    <View style={homeStyles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
      {/* Dots Indicator */}
      <View style={homeStyles.dotsContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              homeStyles.dot,
              activeIndex === index
                ? homeStyles.activeDot
                : homeStyles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
