function solve(input) {
    const softUni = {};
    input.forEach(line => {
        if (line.includes(': ')) {
            let [courseName, capacity] = line.split(': ');

            if (!softUni.hasOwnProperty(courseName)) {
                softUni[courseName] = {
                    capacity: Number(capacity),
                    students: []
                }
            } else {
                softUni[courseName]['capacity'] += Number(capacity);
            }
        } else {
            let userAndCredits = line.split(']')[0];
            let [user, credits] = userAndCredits.split('[')
            let emailAndCourse = line.split('with email ')[1];
            let [email, course] = emailAndCourse.split(' joins ');
            
            if (softUni[course] && softUni[course]['capacity'] > 0) {
                softUni[course]['students'].push({
                    username: user,
                    credits: Number(credits),
                    email: email
                })
                softUni[course]['capacity']--;
            }           
        }
    })
    Object.entries(softUni)
    .sort((a, b) => b[1]['students'].length - a[1]['students'].length)
    .forEach(c => {
        console.log(`${c[0]}: ${c[1]['capacity']} places left`);
        c[1]['students']
        .sort((a, b) => b['credits'] - a['credits'])
        .forEach(s => {
            console.log(`--- ${s['credits']}: ${s['username']}, ${s['email']}`);
        })
    })
}

solve([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
])