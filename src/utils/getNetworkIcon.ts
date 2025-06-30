import { bind } from "astal"
import NetWork from "gi://AstalNetwork?version=0.1"


export default function getNetworkIcon(){
  
  const nw = NetWork.Network.get_default()
  
  return nw.bind_property_full(
      "primary",
      this,
      "network-icon",
      SYNC,
      (_, primary: AstalNetwork.Primary) => {
          networkBinding?.unbind()
  
          switch (primary) {
              case AstalNetwork.Primary.WIRED:
                  networkBinding = nw.wired.bind_property(
                      "icon-name",
                      this,
                      "network-icon",
                      SYNC,
                  )
                  return [false, ""]
              case AstalNetwork.Primary.WIFI:
                  networkBinding = nw.wifi.bind_property(
                      "icon-name",
                      this,
                      "network-icon",
                      SYNC,
                  )
                  return [false, ""]
              default:
                  return [true, "network-idle-symbolic"]
          }
      },
      null,
  )
}