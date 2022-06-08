import { reactive } from 'vue'
// import React from 'react'
import { View, Text, Button } from '@tarojs/components'

export default {
  name: 'Index',
  components: {
    View,
    Text,
    Button
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～'
    })

    const handleClick = msg => {
      state.msg = msg
    }

    return () => {
      return (
          <View>
            <View>
              <Text>我人直接裂开了</Text>
            </View>
          </View>
      )
    }
  }
}