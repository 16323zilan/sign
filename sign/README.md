# sign

> 面试管理软件

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```
# git
命令 | 说明
---|---
git init | 初始化本地版本库
git status | 查看工作区和暂存区的修改
git add . | 把工作区所有的修改提交到暂存区
git commit -m '描述' | 把修改从暂存区提交到本地版本库
git log | 查看提交记录
git reflog | 查看所有的提交记录
git diff | 查看工作区具体的修改
git remote add origin 仓库地址 | 把本地版本库和远程仓库关联起来（只配置一次）
git remote -v | 查看关联的远程仓库
git push -u origin master | 把本地版本库里所有修改的提交到远程仓库，-u指所有的
git pull origin master | 把远程仓库的代码拉取到本地仓库
git branch 分支名 | 新建分支
git branch | 查看本地所有的分支
git branch -r | 查看远程分支
git branch -a | 查看远程和本地所有的分支
git branch -d 分支名 | 删除分支
git push origin -d 分支名 | 删除远程分支
git checkout 分支名 | 切换分支
git checkout -b 分支名 | 创建并切换分支
git merge 分支名 | 合并分支

**撤销**
1. 第一种情况：撤销工作区的修改
-      git checkout -- 文件路径
2. 第二种情况：撤销暂存区的修改
-     第一步：git reset 文件路径
        把修改从暂存区撤回到工作区
-     第二步：git checkout -- 文件路径
3. 第三种情况：回退版本
-     git reset --hard HEAD^ 
    一个^回退到上一个版本
    两个^^回退到上上个版本
-     git reset --hard commit_id


```
git pull:
从远程拉取代码并和本地的代码合并

git fetch：
从远程拉取代码不和本地的合并

git merge：合并代码

git pull = git fetch + git merge
```

