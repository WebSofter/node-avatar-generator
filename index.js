const { marble } = require('./templates/marble')
const { sunset } = require('./templates/sunset')
const { bauhaus } = require('./templates/bauhaus')
const { beam } = require('./templates/beam')
const { pixel } = require('./templates/pixel')
const { ring } = require('./templates/ring')
const argv = require('minimist')(process.argv.slice(2));

const props = {
    variant: argv.v,
    size: argv.hasOwnProperty('s') ? argv.s : 80,
    name: argv.n,
    colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]
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
process.stdout.write(content)

