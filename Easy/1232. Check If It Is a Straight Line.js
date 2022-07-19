/**
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
Example 1:



Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:



Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
 */

//--
{ // Logic is good but not passes all test cases
    var checkStraightLine = function (coordinates) {
        coordinates = coordinates.flat()
        let arrSum = 0

        for (let ele of coordinates) {
            arrSum += ele
        }

        let n = coordinates[coordinates.length - 1]
        let nSum = n * (n + 1) / 2
        let mSum = nSum - (coordinates[0] + n)

        return (arrSum - (nSum + mSum)) === 0

    };
}
//--
{
    const checkStraightLine = coordinates => {
        const isStraight = (x, y, z) => (y[1] - x[1]) * (z[0] - y[0]) === (y[0] - x[0]) * (z[1] - y[1]);

        for (let i = 1, n = coordinates.length - 1; i < n; i++)
            if (!isStraight(coordinates[i - 1], coordinates[i], coordinates[i + 1]))
                return false;

        return true;
    };
}
//--
{
    var checkStraightLine = function (coordinates) {
        if (coordinates.length < 3) return true;

        for (let i = 0; i < coordinates.length - 2; i++) {
            const [x1, y1] = coordinates[i];
            const [x2, y2] = coordinates[i + 1];
            const [x3, y3] = coordinates[i + 2];
            const crossProduct = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);

            if (crossProduct) return false;
        }

        return true;
    };
}