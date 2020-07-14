function rosettaStone(input) {
    let templateGenerator = function (array) {
        let template = [];

        for (let i = 0; i < n; i++) {
            template.push(array.shift()
                .split(' ')
                .map(Number));
        }

        return template;
    }

    let messageGenerator = function (array) {
        let message = array.map(a => {
            return a.split(' ').map(Number);
        })

        return message;
    }

    let applyTemplate = function (message, template, columns) {
        let result = [];

        for (let i = 0; i < message.length; i++) {
            for (let j = 0; j < message[i].length; j++) {
                let currentTemplateNum = template[i % n][j % columns];

                if (currentTemplateNum != undefined) {
                    result.push(message[i][j] + currentTemplateNum);
                } else {
                    result.push(message[i][j]);
                }
            }
        }

        return result;
    }

    let removeTrailingSpaces = function (array) {
        return array.filter((a, inx, arr) => a != 0 || (a == 0 && arr[inx + 1] != 0));
    }

    let decypher = function (array) {
        let cypher = [' ', 'A', 'B', 'C', 'D', 'E',
            'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let result = array.map(a => cypher[a % cypher.length]);
        return result.join('');
    }

    let inputData = input.slice();
    let n = Number(inputData.shift());
    let template = templateGenerator(inputData);
    let templateLength = template[0].length;
    let message = messageGenerator(inputData);
    let modifiedMessage = applyTemplate(message, template, templateLength);
    let finalMessage = removeTrailingSpaces(modifiedMessage);
    let decypheredMessage = decypher(finalMessage);

    return decypheredMessage;
}
rosettaStone([
    '1',
    '0 0 13',
    '12 22 14 0 0 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
  ]
  
)