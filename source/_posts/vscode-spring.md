---
title: vscode 下搭建spring boot环境
date: 2020-12-29 09:52:20
tags:
- vscode
- spring-boot
categories:
- [vscode]
- [spring-boot]
---

### 安装扩展插件
* `Java Extension Pack`
* `Spring Boot Extension Pack`

<!-- more -->

### 在 `setting.json` 文件中配置maven和jdk
``` json
"java.home":"C:\\Program Files (x86)\\Java\\jdk1.8.0_102",
"java.configuration.maven.userSettings": "C:\\Program Files\\apache-maven-3.6.3\\conf\\settings.xml",
"maven.executable.path": "C:\\Program Files\\apache-maven-3.6.3\\bin\\mvn.cmd",
"maven.terminal.useJavaHome": true,
"maven.terminal.customEnv": [
    {
        "environmentVariable": "JAVA_HOME",
        "value": "C:\\Program Files (x86)\\Java\\jdk1.8.0_102"
    }
],
```
<p style="color: orange; font-weight: bold">配置完成之后，重启vscode</p>

### 创建 spring boot 项目
#### `ctrl + shift + p`, 输入 `spring`, 选择 `Create a maven project...`
![create-spring-boot-step1](create-spring-boot-step1.PNG)

#### 选择spring版本
![select-spring-version-step2](select-spring-version-step2.PNG)

#### 选择语言
![select-language-step3](select-language-step3.PNG)

#### 输入group id
![input-group-id-step4](input-group-id-step4.PNG)

#### 输入artifact id
![artifact-id-step5](artifact-id-step5.PNG)

#### 选择package type
![specify-packging-type-step6](specify-packging-type-step6.PNG)

#### 选择jdk版本
![specify-java-version-step7](specify-java-version-step7.PNG)

#### 选择dependencies
<p style="color: orange">DevTools(代码修改热更新，无需重启)</p>
<p style="color: orange">Web(集成tomcat、SpringMVC）</p>
<p style="color: orange">Lombok(智能生成setter、getter、toString等接口，无需手动生成)</p>

![select-dependencies-step8](select-dependencies-step8.PNG)

#### 选择项目目录, 直接点击 `Generate into this folder` 按钮
![select-folder-step9](select-folder-step9.PNG)

### 启动项目
#### 打开项目目录，打开 `DemoApplication.java`, 点击小虫子按钮, 生成 `launch.json` 文件
![start-create-launch-json-1](start-create-launch-json-1.PNG)

#### `launch.json` 文件如下图所示
![launch-json-2](launch-json-2.PNG)

#### 点击三角形按钮，启动spring项目
![run-3](run-3.PNG)

#### 浏览器输入 `localhost:8080` 访问
![browser-4](browser-4.PNG)

<p style="color: red; font-weight: bold">错误原因:没有定义服务器访问这个根路径对应的应答接口</p>
<p style="color: green; font-weight: bold">解决方案: 在demo包下面新建个controller包，然后新建个HomeController.java 文件，内容如下：</p>

``` java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @RequestMapping("/")
    public String home(){
        return "Hello World!";
    }
}
```
`目录结构如下`
![folder-structure-4](folder-structure-4.PNG)

<p style="color: green; font-weight: bold">刷新浏览器，即可看到访问成功</p>

![run-successfully-5](run-successfully-5.PNG)

