
export function walk(arr: string[], currentX: number, currentY: number, finishX: number, finishY: number) {

    let count = 0;

    function doWalk() {
        return count++
    }
    const newArr = arr.map(item => item.split(','));

    let currentPosition = newArr[currentY][currentX];

    function finishHim() {
        return ((currentX === finishX) && (currentY === finishY))
    }
    function checkBottom() {

        doWalk()
        console.log('go bottom')
        currentY += 1
        currentPosition = arr[currentY][currentX];

    }
    function checkTop() {
        doWalk()
        console.log('go top')
        currentY -= 1
        currentPosition = arr[currentY][currentX];
    }
    function checkRightTop() {
        doWalk()
        currentY -= 1;
        currentX += 1;
        currentPosition = arr[currentY][currentX];
        console.log('go RightTop')
    }
    function checkRightBottom() {
        doWalk()
        currentY += 1;
        currentX += 1;
        currentPosition = arr[currentY][currentX];
        console.log('go RightBottom')
    }
    function checkLeftBottom() {
        doWalk()
        currentY += 1;
        currentX -= 1;
        currentPosition = arr[currentY][currentX];
        console.log('go LeftBottom')
    }
    function checkLeftTop() {
        doWalk()
        currentY -= 1;
        currentX -= 1;
        currentPosition = arr[currentY][currentX];
        console.log('go LeftTop')
    }
    function checkLeft() {
        doWalk()
        currentX -= 1;
        currentPosition = arr[currentY][currentX];
        console.log('go Left')
    }
    function checkRight() {
        doWalk()
        currentX += 1;
        currentPosition = arr[currentY][currentX];
        console.log('go Right')
    }
    function changeDirection(): boolean | undefined {

        if (currentPosition === 'x') {

            if (currentX > finishX) {
                console.log('check x go right')
                if (currentPosition != 'x') {
                    checkRight()
                }
                else {
                    checkLeft()
                    return false
                }

                return false
            }
            if (currentX < finishX) {
                console.log('check x go left')
                if (currentPosition != 'x') {
                    checkLeft()
                }
                else {
                    checkRight()
                }

                return false
            }
            if (currentY > finishY) {
                console.log('check x go bottom')
                if (currentPosition != 'x') {
                    checkBottom()
                }
                else {
                    checkTop()
                }

                return false
            }
            if (currentY < finishY) {
                console.log('check x go top')
                if (currentPosition != 'x') {
                    checkTop()
                }
                else {
                    checkBottom()
                }
                return false
            }

        } else {
            changeDirection()

        }
        return true
    }
    function checkDirection() {
        if (currentPosition != 'x') {
            if (((currentX < finishX) && (currentY < finishY))) {

                checkRightBottom()

            }
            if (((currentX > finishX) && (currentY < finishY))) {

                checkLeftBottom()
            }
            if (((currentX < finishX) && (currentY > finishY))) {

                checkRightTop()
            }
            if (((currentX > finishX) && (currentY > finishY))) {

                checkLeftTop()
            }
            if (((currentX === finishX) && (currentY > finishY))) {

                checkTop()
            }
            if (((currentX === finishX) && (currentY < finishY))) {

                checkBottom()
            }
            if (((currentX > finishX) && (currentY === finishY))) {
                checkLeft()
            }
            if (((currentX < finishX) && (currentY === finishY))) {
                checkRight()
            }
        } else {

            changeDirection()

        }
    }
    while (!finishHim() && currentX != undefined && currentY != undefined) {

        checkDirection()

    }

    return count
}