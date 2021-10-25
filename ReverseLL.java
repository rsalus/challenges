/* https://leetcode.com/problems/reverse-linked-list/
 * Runtime: 0 ms, faster than 100.00% 
 * Memory Usage: 40.4 MB, less than 7.46% */

public class ReverseLL {
    public static ListNode reverseList(ListNode head){
        if(head == null || head.next == null)
            return head;
        
        ListNode succ = head.next;
        head.next = null;
        
        ListNode rest = reverseList(succ);
        succ.next = head;

        return rest;
    }

    public static void main(String[] args){
        ListNode node = new ListNode(1);
        ListNode head = node;
        for(int i = 2; i < 6; i++){
            node.next = new ListNode(i);
            node = node.next;
        }
        
        node = head;
        while(head != null){
            System.out.print(head.val + ", ");
            head = head.next;
        }

        System.out.println();
        head = reverseList(node);
        while(head != null){
            System.out.print(head.val + ", ");
            head = head.next;
        }
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}