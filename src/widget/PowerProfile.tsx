import PowerProfiles from "gi://AstalPowerProfiles"

const powerprofiles = PowerProfiles.get_default()

export default function PowerProfile(){
  print(powerprofiles.activeProfile)
}