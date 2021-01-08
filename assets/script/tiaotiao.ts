// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('mousedown',this.onClicked,this)
    }

    start () {

    }
    onClicked(){
        // let node:cc.Node=cc.find('Canvas/2519d80e4bee8ccc/tiao')
        let node:cc.Node=cc.find('Canvas/2519d80e4bee8ccc')

        // node.setPosition(0,-200)
        // let mylabel:cc.Label=node.getComponent(cc.Label)
        // mylabel.string='我是跳跳猪啊'
        // let xinlabel:cc.Label=node.getComponent('simple')
        // xinlabel.dochange()
        // let pos:cc.Vec2 =node.getPosition()
        // node.setPosition(cc.v3(280,100,0))
        // node.setScale(cc.v3(1.2,1.2,0))

        //to 绝对运算，设置最终的位置
        //by 相对运算，设置需要移动的距离
        // cc.tween(node).to(1,{position:cc.v3(250,180,0),rotation: 360}).start()
        cc.tween(node)
            .by(1,{position: cc.v3(400,0,0)},{easing:'quadOut'})
            .by(1,{position: cc.v3(0,400,0)})
            .by(1,{position: cc.v3(-400,0,0)})
            .by(1,{position: cc.v3(0,-400,0)})
            .start()
    }
    // update (dt) {}
}
