function party(input) {
    const resList = input.slice(0, input.indexOf('PARTY'));
    const attendees = input.slice(input.indexOf('PARTY') + 1);
    const guestList = {vips: [], regulars: []};

    for (const guest of resList) {
        if (guest.charCodeAt(0) < 65) {
            guestList['vips'].push(guest);
        } else {
            guestList['regulars'].push(guest);
        }
    }

    for (const guest of attendees) {
        if (guestList['vips'].includes(guest)) {
            guestList['vips'].splice(guestList['vips'].indexOf(guest), 1);
        } else if (guestList['regulars'].includes(guest)) {
            guestList['regulars'].splice(guestList['regulars'].indexOf(guest), 1);
        }
    }

    console.log(guestList['vips'].length + guestList['regulars'].length);
    guestList['vips'].forEach(guest => console.log(guest));
    guestList['regulars'].forEach(guest => console.log(guest));
}

party(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])