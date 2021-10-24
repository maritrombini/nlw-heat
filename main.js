const LinksSocialMedia = {
  github: 'maritrombini',
  youtube: 'youtube',
  facebook: 'facebook',
  instagram: 'mari.trombini',
  twitter: 'twitter'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1
// i++

// ser humano 12345678910
//computador 0123456789

//arrow function
// argumento => {} eliminando function e nomedafuncao. é anonima
// pra executar arrow nao basta chamar
//() => {} ou (argumento1, argumento2) => {}
// quando so se faz uma coisa na arrow nao precisa de chaves - response.json

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.login
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
