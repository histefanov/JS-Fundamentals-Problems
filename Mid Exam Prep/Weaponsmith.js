function weaponsmith(input) {
    const particles = input.shift().split('|');
    let action = input.shift().split(' ');
    let command = action[0];

    while (command !== 'Done') {
        if (command === 'Move') {
            let direction = action[1];
            let index = Number(action[2]);
            let particle = particles[index];

            if (direction === 'Left') {
                if (particle !== undefined && index - 1 >= 0) {
                    particles[index] = particles[index - 1];
                    particles[index - 1] = particle;
                }
            } else if (direction === 'Right') {
                if (particle !== undefined && index + 1 < particles.length) {
                    particles[index] = particles[index + 1];
                    particles[index + 1] = particle;
                }
            }
        } else if (command === 'Check') {
            let arg = action[1];

            if (arg === 'Even') {
                console.log(particles.filter((x, i) => i % 2 === 0).join(' '));
            } else if (arg === 'Odd') {
                console.log(particles.filter((x, i) => i % 2 !== 0).join(' '));
            }
        }
        action = input.shift().split(' ');
        command = action[0];
    }
    console.log(`You crafted ${particles.join('')}!`);
}

weaponsmith([
    'Ve|or|nd|st|ke|ri',
    'Check Even',
    'Move Right 5',
    'Move Left 2',
    'Move Left 0',
    'Move Right 4',
    'Done'
  ]
)