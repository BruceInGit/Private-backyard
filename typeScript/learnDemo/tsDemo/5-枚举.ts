// 枚举类型  enum
// Up使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4
// 默认情况下，从0开始  
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
// 可以反向映射获取属性名，Direction[2]
console.log(Direction[2],Direction.Down);

