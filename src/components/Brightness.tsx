import { createBinding } from "ags";
import Brightness from "../utils/brightness";

export default function BrightnessSlider() {
  
  const brightness = Brightness.get_default();
  
  return (
    <menubutton class="brightness" tooltipText="Controle de Brilho">
      <box>
        <image iconName="display-brightness-symbolic"/> 
        <label label={createBinding(brightness, "screen").as(fn => Math.floor(fn * 100).toString() + "%")}/>
      </box>
    <popover>
      <slider
        widthRequest={260}
        value={createBinding(brightness, "screen")}
        onValueChanged={({ value }: {value: number}) => brightness.screen = value}
      />
    </popover>
    </menubutton>
  )
}