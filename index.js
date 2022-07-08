const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

let monthNames = ["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug", "Sep", "Oct","Nov","Dec"];

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
# Hi there! <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="35" />
<p align="center">
<a href="https://twitter.com/neeraj_kuro" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="Neeraj_Sirvisetti" height="30" width="30" /></a>&nbsp;
<a href="https://www.linkedin.com/in/neeraj-sirvisetti/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="NeerajSirvisetti" height="30" width="30" /></a>&nbsp;
<a href="https://neerajsirvisetti.herokuapp.com/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/googlechrome.svg" alt="Neerajsirvisetti" height="40" width="30" /></a>&nbsp;
</p>
![](https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966)
### <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Developer.gif" width="45" /> About Me:
- 🏦 I'm a Python Development Engineer working for a consultancy Services Tech Giant in India 
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 💻 I use daily **.py**, **.yml**, **Splunk**,  **AWS**
- 📖 I am currently reading **The Author's POV** by entrail ji
- 💬 Talk to me about Physics, Python , Deep Learning & Quantum Computing
- 👯 We can connect to build projects if your have any common interests overlapping mine
- ⚡ Fun fact: el psy congroo
- 🧑‍💻 Tech I work on :
<p align="center">
      <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/splunk/splunk-ar21.svg" alt="Splunk" width="65" height="65"/> 
      <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="GIT" width="55" height="55"/>      
      <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="Flask" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg" alt="PySpark" width="55" height="55"/> 
      <img src="https://www.vectorlogo.zone/logos/amazon_eks/amazon_eks-ar21.svg" alt="kubernetes" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/amazon_awslambda/amazon_awslambda-icon.svg" alt="Lambda" width="65" height="65"/> 
      <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="aws" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/docker/docker-official.svg" alt="docker" width="60" height="50"/>
      <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="mysql" width="45" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="VSCode" width="65" height="65"/>
      <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="HTML" width="65" height="65"/>
      <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg" alt="CSS" width="45" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/quip/quip-ar21.svg" alt="Quip" width="65" height="65"/> 
</p>
---
### <img src='https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47x2g034i9pzwtzzsd3xgg2w9nr94t4tflbbgo3008&rid=giphy.gif' width='25' /> My Github Stats:
![Neeraj's github stats](https://github-readme-stats.vercel.app/api?username=neerajsirvisetti&show_icons=true&title_color=ffc857&icon_color=8ac926&text_color=daf7dc&bg_color=151515&hide=issues&count_private=true&include_all_commits=true)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=neerajsirvisetti&layout=compact&text_color=daf7dc&bg_color=151515&hide=css,html,php)](https://github.com/anuraghazra/github-readme-stats)
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->
⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${(new Date().getDate()-1)+'-'+ monthNames[new Date().getMonth()]+'-'+new Date().getFullYear()}

---

`
console.log(readme)
