def count(nums):
    count = {}
    most_freq = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1

        if count[num] > count[most_freq]:
            most_freq = num

    return most_freq
