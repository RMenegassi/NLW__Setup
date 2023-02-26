import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

import colors from 'tailwindcss/colors';

import Icon from 'react-native-vector-icons/Feather';

import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center">
        <Icon name="plus" size={20} color={colors.violet[500]} />
        <Text className="text-white ml-3 font-semibold text-base ">Novo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
