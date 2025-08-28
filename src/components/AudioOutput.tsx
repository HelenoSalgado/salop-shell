import { createBinding } from "ags"
import AstalWp from "gi://AstalWp?version=0.1"

export default function AudioOutput() {
  const { defaultSpeaker: speaker } = AstalWp.get_default()!

  return (
    <menubutton class="audio-output">
      <box>
        <image iconName={createBinding(speaker, "volumeIcon")} />
        <label label={createBinding(speaker, "volume").as((n) => Math.floor(n * 100).toString() + "%")}/>
      </box>
      <popover>
          <slider
            widthRequest={260}
            onChangeValue={({ value }: {value: string}) => speaker.set_volume(value)}
            value={createBinding(speaker, "volume")}
          />
      </popover>
    </menubutton>
  )
}