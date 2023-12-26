import { loginPage } from "./pages/login_page.cy";
import { channelPage } from "./pages/channel_page.cy";

const login_Page = new loginPage()
const channel_Page = new channelPage()

const channelData = [
    { channelName: 'Harry 1', channelDescription: 'This channel belongs to Harry and his friends' },
    { channelName: 'Harry 2', channelDescription: 'This channel belongs to Harry and his friends' },
    { channelName: 'Harry 3', channelDescription: 'This channel belongs to Harry and his friends' },


  ];

  channelData.forEach((channel) => {
it('should create new channel', () => {

    cy.visit('/')

    login_Page.enterUsername('dumbledor@mailinator.com')
    login_Page.enterPassword('Password@123')
    login_Page.clickLogin()

    cy.wait(12000)

    
    channel_Page.createChannelButton()
    channel_Page.newChannelName(channel.channelName)
    channel_Page.newChannelDescription(channel.channelDescription)
    channel_Page.submitNewChannel()

    cy.wait(3000)

    console.log('Test Passed')
})
})