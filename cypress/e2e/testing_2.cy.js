import { loginPage } from "./pages/login_page.cy"
import { channelPage } from "./pages/channel_page.cy"

function createBroadcastRecusively (count, totalTime) {
    if (count <= 0) {
        return
    }
    
    const startTime = new Date().getTime()

    const randomBroadcastName = getRandomFullName()
    
    const endTime = new Date().getTime()

    const totalTime = endTime - startTime
}