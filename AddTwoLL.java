/*  https://leetcode.com/problems/add-two-numbers/submissions/
    Runtime: 3 ms, faster than 51.40% of Java online submissions for Add Two Numbers.
    Memory Usage: 44.6 MB, less than 43.10% of Java online submissions for Add Two Numbers.
*/

public class AddTwoLL {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode fake = new ListNode(0);
        ListNode p = fake;
     
        ListNode p1 = l1;
        ListNode p2 = l2;
     
        int carry = 0;
        while(p1!=null || p2!=null){
            int sum = carry;
            if(p1!=null){
                sum += p1.val;
                p1 = p1.next;
            }
     
            if(p2!=null){
                sum += p2.val;
                p2 = p2.next;
            }
     
            if(sum>9){
                carry=1;
                sum = sum-10;
            }else{
                carry = 0;
            }
     
            ListNode l = new ListNode(sum);
            p.next = l;
            p = p.next;
        }
     
        //don't forget check the carry value at the end
        if(carry > 0){
            ListNode l = new ListNode(carry);
            p.next = l;
        }
        return fake.next;
    }

    public static void main(String[] args){

    }
}

/*
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order, and each of their nodes contains a single digit. 
    Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}*/