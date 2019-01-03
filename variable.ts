// 作用域规则
function f (shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10
  }
  return x
}

f(true)
f(false)

// 块级作用域变量的获取   不仅是在循环里引入了一个新的变量环境 而是针对 每次迭代都会创建这样一个新作用域
for (let i = 0; i < 10 ; i++) {
  setTimeout(function() {console.log(i); }, 100 * i);
}

