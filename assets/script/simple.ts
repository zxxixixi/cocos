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
    label :cc.Label =null;
    text: string =null;
    index: number =0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.label =this.getComponent(cc.Label);
        this.text =this.label.string;
        this.label.string=''
        this.schedule(this.onTimer,0.3)
    }

    start () {

    }

    onTimer(){
        this.index ++;
        let newst:string=this.text.substr(0,this.index)
        this.label.string=newst;
        if(this.index>this.text.length){
            this.unschedule(this.onTimer)
        }

    }
    dochange(){
        let x =this.node.x;
        let y =this.node.y;
        this.node.setPosition(x,-y)
    }

    // update (dt) {}
}
