// TODO: desarrollar después de RadioButton
<template>
  <StackLayout class="genderlist">
    <RadioButton
      v-for="(item, index) in items"
      :key="index"
      class="checkbox"
      :enabled="isEnabled"
      :text="$t(item.text)"
      :checked.sync="item.selected"
      @onChangeChecked="changeCheckedRadio(item)"
    />
  </StackLayout>
</template>

<script>
import RadioButton from './RadioButton'
export default {
  name: 'RadioButtonGroup',
  components: {
    RadioButton
  },
  props: {
    text: {
      type: Array,
      default: null
    }
  },
  methods: {
    // TODO: Revisar métodos
    toggleEnabled() {
      this.isEnabled = !this.isEnabled
    },
    changeCheckedRadio(item) {
      if (item.selected === true) {
        return
      }

      item.selected = !item.selected

      for (const gender of this.genders) {
        if (gender.type !== item.type) {
          gender.selected = false
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped></style>
