/**
 * @param {Robot} robot
 * @return {void}
 * backtracing
 */
let cleanRoom = function(robot) {
    let visited = {}
    let recur = function(i, j, curdir) {
        if (visited[i+','+j]) return
        robot.clean()
        visited[i+','+j] = true
        for (let d = 0; d < 4; d++) {
            if (robot.move()) {
                let x = i, y = j
                switch(curdir) {
                    case 0:
                        x = i-1
                        break
                    case 90:
                        y = j+1
                        break
                    case 180:
                        x = i+1
                        break
                    case 270:
                        y = j-i
                        break
                    default:
                        break

                }
                recur(x, y, curdir) 
                robot.turnLeft()
                robot.turnLeft()
                robot.move()
                robot.turnRight()
                robot.turnRight()
            }
            robot.turnRight()
            curdir += 90
            curdir %= 360
        }
    }
    recur(0, 0, 0)
}