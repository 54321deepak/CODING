#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_MEMBERS 50
#define MAX_NAME_LENGTH 50
#define FILENAME "members.txt"

struct Member {
    char name[MAX_NAME_LENGTH];
    int membershipNumber;
    int attendanceCount;
};

struct Member members[MAX_MEMBERS];
int numMembers = 0;

void displayMenu() {
    printf("\nGym Membership System\n");
    printf("1. Sign Up for Membership\n");
    printf("2. Mark Attendance\n");
    printf("3. View Members\n");
    printf("4. Save Members to File\n");
    printf("5. Load Members from File\n");
    printf("6. Exit\n");
    printf("Enter your choice: ");
}

void signUp() {
    if (numMembers < MAX_MEMBERS) {
        printf("Enter your name: ");
        scanf(" %[^\n]", members[numMembers].name);
        members[numMembers].membershipNumber = numMembers + 1;
        members[numMembers].attendanceCount = 0;
        numMembers++;
        printf("Membership created successfully. Your membership number is %d.\n", members[numMembers - 1].membershipNumber);
    } else {
        printf("Maximum number of members reached.\n");
    }
}

void markAttendance() {
    if (numMembers > 0) {
        int membershipNumber;
        printf("Enter your membership number: ");
        scanf("%d", &membershipNumber);

        int memberIndex = -1;
        for (int i = 0; i < numMembers; i++) {
            if (members[i].membershipNumber == membershipNumber) {
                memberIndex = i;
                break;
            }
        }

        if (memberIndex != -1) {
            members[memberIndex].attendanceCount++;
            printf("Attendance marked for %s.\n", members[memberIndex].name);
        } else {
            printf("Invalid membership number.\n");
        }
    } else {
        printf("No members available.\n");
    }
}

void viewMembers() {
    if (numMembers > 0) {
        printf("\nGym Members:\n");
        for (int i = 0; i < numMembers; i++) {
            printf("Membership Number: %d\n", members[i].membershipNumber);
            printf("Name: %s\n", members[i].name);
            printf("Attendance Count: %d\n", members[i].attendanceCount);
            printf("\n");
        }
    } else {
        printf("No members available.\n");
    }
}

void saveMembersToFile() {
    FILE *file = fopen(FILENAME, "w");
    if (file != NULL) {
        for (int i = 0; i < numMembers; i++) {
            fprintf(file, "%s %d %d\n", members[i].name, members[i].membershipNumber, members[i].attendanceCount);
        }
        fclose(file);
        printf("Members saved to file.\n");
    } else {
        printf("Error opening file for writing.\n");
    }
}

void loadMembersFromFile() {
    FILE *file = fopen(FILENAME, "r");
    if (file != NULL) {
        while (fscanf(file, "%s %d %d", members[numMembers].name, &members[numMembers].membershipNumber, &members[numMembers].attendanceCount) == 3) {
            numMembers++;
            if (numMembers >= MAX_MEMBERS) {
                printf("Maximum number of members reached.\n");
                break;
            }
        }
        fclose(file);
        printf("Members loaded from file.\n");
    } else {
        printf("Error opening file for reading.\n");
    }
}

int main() {
    int choice;

    loadMembersFromFile();  
    do {
        displayMenu();
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                signUp();
                break;
            case 2:
                markAttendance();
                break;
            case 3:
                viewMembers();
                break;
            case 4:
                saveMembersToFile();
                break;
            case 5:
                loadMembersFromFile();
                break;
            case 6:
                printf("Exiting program.\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }

    } while (choice != 6);

    return 0;
}
