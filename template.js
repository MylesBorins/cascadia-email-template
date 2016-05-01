'use strict';
// var data = [{
//   curator: 'Myles Borins',
//   day: 'node',
//   title: 'How tool time was built with JS',
//   speaker: 'Jonathan Taylor Thomas',
//   email: 'tims-sons@gmail.com'
// }]
//
function templateEmail(data) {
  return `Howdy ${data.speaker}!

My name is ${data.curator} and I'm the curator for ${data.day} Day at CascadiaFest 2016. You’re proposal for "${data.title}" is amazing. It’s the perfect storm of interesting, relevant, and one-of-a-kind content that we need, and we’d love for you to speak at CascadiaFest--${data.day} Day 2016!

If you’re still interested and available to attend, please confirm by responding to this email. Please feel free to reach out to me with any questions.

Fill out THIS FORM PLEASE  ${data.link}

We want to help you in your contributions to make the best Cascadia. You’re among super cool company and we can’t wait for you to contribute to what we love dearly --our community!

P.S. PLEASE don't share that you're speaking yet. Mums the word! We'll be releasing the speakers over the next few weeks.

<3 The Cascadia Team`;
}

module.exports = templateEmail