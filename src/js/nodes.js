const nodes = (() => {
  const n = {}
  n.contactForm = document.body.querySelector('#contactFormID')
  n.formGroup = n.contactForm.querySelector('.form-group')
  n.formName = n.formGroup[0]
  n.formEmail = n.formGroup[1]
  n.formMessage = n.formGroup[2]

  n.bannerBtn = document.getElementById('bannerBtn')
  n.home = document.querySelector('.navbar-brand')
  n.navAbout = document.getElementById('navAbout') // document.getElementById('navAbout')
  n.navNews = document.getElementById('navNews')
  n.navAdvantages = document.getElementById('navAdvantages')
  // n.navServices = document.getElementById('navServices')
  n.navCourses = document.getElementById('navCourses')
  n.navDiplomas = document.getElementById('navDiplomas')
  n.navTeam = document.getElementById('navTeam')
  n.navCarriers = document.getElementById('navCarriers')
  n.contact = document.getElementById('navContact')

  n.aboutBlock = document.getElementById('aboutBlock')
  n.newsBlock = document.getElementById('newsBlock')
  n.advantagesBlock = document.getElementById('advantagesBlock')
  n.servicesBlock = document.getElementById('servicesBlock')
  n.coursesBlock = document.getElementById('coursesBlock')
  n.diplomasBlock = document.getElementById('diplomasBlock')
  n.teamBlock = document.getElementById('teamBlock')
  n.carriersBlock = document.getElementById('carriersBlock')
  n.phoneContact = document.getElementById('phoneContact')

  n.container = ('div')

  n.childrenInfoClick = document.getElementById('childrenInfoClick')
  // n.adultsInfoClick = document.getElementById('adultsInfoClick')
  n.vouchersInfoClick = document.getElementById('vouchersInfoClick')
  n.individualLessonsInfoClick = document.getElementById('individualLessonsInfoClick')
  n.distanceLearningInfoClick = document.getElementById('distanceLearningInfoClick')
  n.childrenInfo = document.getElementById('childrenInfo')
  // n.adultsInfo = document.getElementById('adultsInfo')
  n.vouchersInfo = document.getElementById('vouchersInfo')
  n.individualLessonsInfo = document.getElementById('individualLessonsInfo')
  n.distanceLearningInfo = document.getElementById('distanceLearningInfo')

  n.navDivs = [n.navAbout, n.navNews, n.navAdvantages, n.navCourses, n.navDiplomas, n.navTeam, n.navCarriers, n.contact]
  // n.divs = [n.aboutBlock, n.newsBlock, n.advantagesBlock, n.servicesBlock, n.coursesBlock, n.diplomasBlock, n.teamBlock, n.carriersBlock]
  n.divs = [n.aboutBlock, n.newsBlock, n.advantagesBlock, n.coursesBlock, n.diplomasBlock, n.teamBlock, n.carriersBlock]

  return n
})()

export { nodes }

