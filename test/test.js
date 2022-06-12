const { marble } = require('../templates/marble')
const { sunset } = require('../templates/sunset')
const { bauhaus } = require('../templates/bauhaus')
const { beam } = require('../templates/beam')
const { pixel } = require('../templates/pixel')
const { ring } = require('../templates/ring')

const fs = require('fs')

const props = {
    variant: 'marble',
    size: 80,
    name: "david",
    colors: ["#5500ff", "#78ADF5", "#DFA452", "#C271B4", "#40e0d0"]
}

const getAvatar = ({ variant, colors, name, square, size, ...props }) => {
    const avatarProps = { colors, name, size, square, ...props };
    const avatars = {
        marble: marble(avatarProps),
        sunset: sunset(avatarProps),
        bauhaus: bauhaus(avatarProps),
        beam: beam(avatarProps),
        pixel: pixel(avatarProps),
        ring: ring(avatarProps),
    }
    return avatars[variant];
}

const content = getAvatar(props)
console.log(content)

const file = './test.svg'

fs.rm(file, { recursive: true }, () => {
    try {
        fs.writeFileSync(file, content)
    } catch (err) {
        console.error(err)
    }
})
