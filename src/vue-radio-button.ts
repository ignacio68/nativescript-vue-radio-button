import { RadioButton } from "./components"

const VueRadioButton = {
  install(Vue) {
    Vue.registerElement(
      "VueRadioButton",
      () => require("nativescript-vue-radio-button").RadioButton
    )
    Vue.component("VueRadioButton", RadioButton)
  }
}

export default VueRadioButton;

// import { Observable } from 'tns-core-modules/data/observable';
// import * as app from 'tns-core-modules/application';
// import * as dialogs from 'tns-core-modules/ui/dialogs';

// export class Common extends Observable {
//   public message: string;

//   constructor() {
//     super();
//     this.message = Utils.SUCCESS_MSG();
//   }

//   public greet() {
//     return "Hello, NS";
//   }
// }

// export class Utils {
//   public static SUCCESS_MSG(): string {
//     let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

//     setTimeout(() => {
//       dialogs.alert(`${msg} For real. Eres un tío grande!!!! :)`).then(() => console.log(`Dialog closed.`));
//     }, 2000);

//     return msg;
//   }
// }
