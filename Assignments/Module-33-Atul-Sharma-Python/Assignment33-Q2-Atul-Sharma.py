
def find_position(arr, key, l, r):
    while l <= r:
        mid = l + (r - l) // 2
        if arr[mid] == key:
            return mid
        elif key > arr[mid]:
            l = mid + 1
        else:
            r = mid - 1
    return l


inpArr = [int(x) for x in input("Enter the nos ").split(",")]
n = len(inpArr)
keyInp = int(input("Enter the target key to find "))
print(
    f"The position of the target no {keyInp} is : {find_position(inpArr, keyInp, 0, n - 1)}"
)
print(f"The final array is : {inpArr}")
