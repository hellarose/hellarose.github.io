let leftdata=[
    {
        name:'创建版本库',
        list:[
            {directive:'$ git clone <url>',description:'克隆远程版本库'},
            {directive:'$ git init',description:'初始化本地版本库'}
        ]
    },
    {
        name:'修改和提交',
        list:[
            {directive:'$ git status',description:'查看状态'},
            {directive:'$ git diff',description:'查看变更内容'},
            {directive:'$ git add .',description:'跟踪所有改动过的文件'},
            {directive:'$ git add <file>',description:'跟踪指定的文件'},
            {directive:'$ git mv <old> <new>',description:'文件改名'},
            {directive:'$ git rm <file>',description:'删除文件'},
            {directive:'$ git rm --cached <file>',description:'停止跟踪文件但不删除'},
            {directive:'$ git commit -m “commit message"',description:'提交所有更新过的文件远程操作'},
            {directive:'$ git commit --amend',description:'修改最后一次提交'}
        ]
    },
    {
        name:'查看提交历史',
        list:[
            {directive:'$ git log',description:'查看提交历史'},
            {directive:'$ git log -p <file>',description:'查看指定文件的提交历史'},
            {directive:'$ git blame <file>',description:'以列表方式查看指定文件'}
        ]
    },
    {
        name:'撤消',
        list:[
            {directive:'$ git reset --hard HEAD',description:'撤消工作目录中所有未提交文件的修改内容'},
            {directive:'$ git checkout HEAD <file>',description:'撤消指定的未提交文件的修改内容'},
            {directive:'$ git revert <commit>',description:'撤消指定的提交'}
        ]
    }
],
rightdata=[
    {
        name:'分支与标签',
        list:[
            {directive:'$ git branch',description:'显示所有本地分支'},
            {directive:'$ git checkout <branch/tag>',description:'切换到指定分支或标签'},
            {directive:'$ git branch <new-branch>',description:'创建新分支'},
            {directive:'$ git branch -d <branch>',description:'删除本地分支'},
            {directive:'$ git tag',description:'列出所有本地标签'},
            {directive:'$ git tag <tagname>',description:'基于最新提交创建标签'},
            {directive:'$ git tag -d <tagname>',description:'删除标签'}
        ]
    },
    {
        name:'合井与衍合',
        list:[
            {directive:'$ git merge <branch>',description:'合并指定分支到当前分支'},
            {directive:'$ git rebase <branch>',description:'行合指定分支到当前分支'}
        ]
    },
    {
        name:'远程操作',
        list:[
            {directive:'$ git remote -V',description:'查看远程版本库信息'},
            {directive:'$ git remote show <remote>',description:'查看指定远程版本库信息'},
            {directive:'$ git remote add <remote> <url>',description:'添加远程版本库'},
            {directive:'$ git fetch <remote>',description:'从远程库获取代码'},
            {directive:'$ git pull <remote> <branch>',description:'下载代码及快速合井的提交历史'},
            {directive:'$ git push <remote> <branch>',description:'上传代码及快速合并'},
            {directive:'$ git push <remote> :<branch/tag-name>',description:'删除远程分支或标签'},
            {directive:'$ git push --tags',description:'上传所有标签'}
        ]
    }
]

let nv=new Vue({
    el:'#vuemountee',
    data(){return {
        leftdata,
        rightdata,
    }},
})