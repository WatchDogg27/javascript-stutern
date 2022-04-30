//Create a function with a function name printSum( ) and print the sum of an array.

function printSum(arr) {
    var sum = 0
    for(var i= 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return(sum);
}

printSum([12,24,3,40,5]);










/*Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned.*/



class points {
    static List[] compareTriplets(List[] a, List[] b) {

        List[] scores = new ArrayList[];


        int aliceScore = 0;
        int bobScore = 0;

        for (i=0; i<a.size(); i++){
            if(a.get(i) > b.get(i)){
                aliceScore += 1;
            }
            else if(b.get(i) > a.get(i)) {
                bobScore += 1;
            }
        }

        scores.add(aliceScore);
        scores.add(bobScore);

        return scores;
    }
}










//Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. Print the decimal value of each fraction on a new line with places after the decimal.


class Ratio {
	static void positiveNegativeZero(int[] arr) {
	


		float positiveCount = 0;
		float negativeCount = 0;
		float zeroCount = 0;



		for (i = 0; i < arr.length; i++) {
			if (arr[i] > 0) {
				positiveCount++;
			}
			else if (arr[i] < 0) {
				negativeCount++;
			}
			else if (arr[i] == 0) {
				zeroCount++;
			}
		}


		printf("%1.4f ", positiveCount);
		printf("%1.4f ", negativeCount);
		printf("%1.4f ", zeroCount);
		println();
	}
}










//Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)

function firstFunction(a ,b){

    let sum = a + b;
    return sum
}
firstFunction(2 ,3)