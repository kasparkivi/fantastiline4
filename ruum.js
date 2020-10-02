const data = [{"roomId":4315,"code":"PH-104"},{"roomId":4316,"code":"PH-107"},{"roomId":4317,"code":"PH-108"},{"roomId":4318,"code":"PH-109"},{"roomId":4319,"code":"PH-110"},{"roomId":4367,"code":"D-D11"},{"roomId":4368,"code":"D-D12"},{"roomId":4365,"code":"D-D13"},{"roomId":4366,"code":"D-D21"},{"roomId":4369,"code":"D-DG"},{"roomId":4339,"code":"Õ-E-ruum"},{"roomId":4529,"code":"Õ-Hotell"},{"roomId":4338,"code":"Õ-IT"},{"roomId":4359,"code":"K-K101"},{"roomId":4360,"code":"K-K102"},{"roomId":4327,"code":"PH-K201"},{"roomId":4320,"code":"PH-K202"},{"roomId":4325,"code":"PH-K203"},{"roomId":4357,"code":"K-K204"},{"roomId":4356,"code":"K-K206"},{"roomId":4361,"code":"K-K207"},{"roomId":4358,"code":"K-K208"},{"roomId":4321,"code":"PH-K303"},{"roomId":4322,"code":"PH-K304"},{"roomId":4323,"code":"PH-K305"},{"roomId":4324,"code":"PH-K306"},{"roomId":4364,"code":"KOM-KOM1"},{"roomId":4346,"code":"Õ-Mess"},{"roomId":4475,"code":"ÕK-MK"},{"roomId":4474,"code":"ÕK-REST"},{"roomId":4363,"code":"SK-Spordikesk"},{"roomId":4379,"code":"TM-TM 105"},{"roomId":4380,"code":"TM-TM 106"},{"roomId":4376,"code":"TM-TM 123"},{"roomId":4375,"code":"TM-TM 124"},{"roomId":4386,"code":"TM-TM 131"},{"roomId":4377,"code":"TM-TM 141"},{"roomId":4371,"code":"TM-TM 147"},{"roomId":4373,"code":"TM-TM 153"},{"roomId":4374,"code":"TM-TM 159"},{"roomId":4378,"code":"TM-TM 201"},{"roomId":4387,"code":"TM-TM 213"},{"roomId":4388,"code":"TM-TM 214"},{"roomId":4372,"code":"TM-TM 215"},{"roomId":4330,"code":"Õ-Õ106"},{"roomId":4337,"code":"Õ-Õ112/ÕK2"},{"roomId":4336,"code":"Õ-Õ201"},{"roomId":4335,"code":"Õ-Õ203"},{"roomId":4352,"code":"Õ-Õ204"},{"roomId":4329,"code":"Õ-Õ205"},{"roomId":4331,"code":"Õ-Õ207"},{"roomId":4340,"code":"Õ-Õ301"},{"roomId":4332,"code":"Õ-Õ303"},{"roomId":4348,"code":"Õ-Õ304"},{"roomId":4347,"code":"Õ-Õ305"},{"roomId":4345,"code":"Õ-Õ307"},{"roomId":4341,"code":"Õ-Õ308"},{"roomId":4333,"code":"Õ-Õ310"},{"roomId":4342,"code":"Õ-Õ402"},{"roomId":4334,"code":"Õ-Õ403"},{"roomId":4344,"code":"Õ-Õ404"}];

const select = document.querySelector('#codeSelect');
for(const item of data){
 	const option = document.createElement("option");
  option.textContent = item.code;
  option.value = item.roomId
  select.appendChild(option);
}


select.addEventListener('change', (event) => {
  const result = document.querySelector('')




})