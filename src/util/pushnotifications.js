import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = '00ZHTY342S';
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `donation Alert:`,
        body: `Your staked reward is successfully donated`
      },
      payload: {
        title: `donation Alert:`,
        body: `Your staked reward is successfully donated`,
        cta: '',
        img: ''
      },
      recipients: `eip155:5:${add1}`, 
      channel: `eip155:5:${add2}`, 
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

sendNotification();