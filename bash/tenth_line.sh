# Read from the file file.txt and output the tenth line to stdout.
#
# Problem: Given a text file file.txt, print just the 10th line of the file.
#
# Example:
# Assume that file.txt has the following content:
# Line 1
# Line 2
# Line 3
# Line 4
# Line 5
# Line 6
# Line 7
# Line 8
# Line 9
# Line 10
#
# Your script should output the tenth line, which is:
# Line 10
#
# Note:
# 1. If the file contains less than 10 lines, what should you output?
# 2. There's at least three different solutions. Try to explore all possibilities.

# Solution 1: Using sed (Stream Editor)
# sed -n '10p' file.txt
# -n: suppresses automatic printing
# '10p': prints only line 10

# Solution 2: Using head and tail
# head -n 10 file.txt | tail -n 1
# head -n 10: gets first 10 lines
# tail -n 1: gets last line from those 10 lines

# Solution 3: Using awk
# awk 'NR==10' file.txt
# NR==10: only processes line number 10

# Most efficient (sed):
sed -n '10p' file.txt
