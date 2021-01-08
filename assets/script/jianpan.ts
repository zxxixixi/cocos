// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   
    direction: string = '0';

    
    speed : number = 5;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log('aa');
        
        cc.systemEvent.on('keydown',this.onkeypress,this);
    }

    start () {

    }
    onkeypress(e: cc.Event.EventKeyboard){
        console.log('111');
        
        if(e.keyCode == cc.macro.KEY.left){
            this.direction == '1';
            console.log(this.direction);
            
            console.log('33');
            
        }else if(e.keyCode == cc.macro.KEY.right){
            this.direction == '2'
        }else if(e.keyCode == cc.macro.KEY.up){
            this.direction == '3'
        }else if(e.keyCode == cc.macro.KEY.down){
            this.direction == '4'
        }else if(e.keyCode ==cc.macro.KEY.space){
            this.direction == '0'
        }else{
            console.log('000');
            
        }
    }
    update (dt) {
        console.log('22');
        
        if(this.direction == '0' ) {
            console.log('没动');
            
            return;
        }else{

        }
       
        let posi:cc.Vec2 =this.node.getPosition()
        posi.x +=this.speed * this.direction.x;
        posi.y +=this.speed * this.direction.y;
        this.node.setPosition(posi);
    }
}
