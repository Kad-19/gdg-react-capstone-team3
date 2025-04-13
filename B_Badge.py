from collections import Counter , defaultdict
from cmath import inf
import sys, threading
sys.setrecursionlimit(1<<30)
threading.stack_size(1<<27)
def inp(): return(int(input()))

def arr():return(list(map(int,input().split())))

def st():
    s = input()
    return(list(s[:-1]))

def num(): return(map(int,input().split()))





def solution():
    n = inp()
    graph = [0]
    c = arr()
    graph.extend(c)
    visited = [0] * (n + 1)
    def dfs(node):
        if visited[node]:
            return node
        visited[node] = 1
        return dfs(graph[node])
    ans = []
    for i in range(1 , n + 1):
        ans.append(dfs(i))
    print(*ans)

    











def main():
    t = 1

    while t:
        solution()
        t -= 1

main()

