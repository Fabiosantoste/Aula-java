/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplication1;
import java.util.Scanner;
import javax.swing.JOptionPane;


/**
 *
 * @author fabio.teixeira
 */
public class JavaApplication1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       String nome = JOptionPane.showInputDialog("Digite seu nome");
       String idade = JOptionPane.showInputDialog("Informe sua idade: ");
       int peso = Integer.parseInt(JOptionPane.showInputDialog("Informe seu peso: "));
       int idadeInt = Integer.parseInt(idade);
       
       
       double salario = Double.parseDouble(JOptionPane.showInputDialog("Qual o seu salário: "));
       
       JOptionPane.showMessageDialog(null, "Nome: " + nome + "\nIdade: " + idadeInt + "\nPeso: " + peso + "\nSalario: " + salario);   
    }
}