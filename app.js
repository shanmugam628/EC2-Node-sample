import java.util.*;

public class CarBrandingApp {

    static class Brand {
        private String name;
        private String tagline;
        private String logoText;

        public Brand(String name, String tagline, String logoText) {
            this.name = name;
            this.tagline = tagline;
            this.logoText = logoText;
        }

        public String getName() {
            return name;
        }

        public String getTagline() {
            return tagline;
        }

        public String getLogoText() {
            return logoText;
        }
    }

    static class Car {
        private Brand brand;
        private String model;
        private int year;
        private String color;

        public Car(Brand brand, String model, int year, String color) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.color = color;
        }

        public void displayBranding() {
            System.out.println("\n===== CAR BRANDING DETAILS =====");
            System.out.println("Brand Name : " + brand.getName());
            System.out.println("Tagline    : " + brand.getTagline());
            System.out.println("Logo Text  : " + brand.getLogoText());
            System.out.println("Model      : " + model);
            System.out.println("Year       : " + year);
            System.out.println("Color      : " + color);
            System.out.println("--------------------------------");
            System.out.println("Brand Label: " 
                    + brand.getLogoText() + " | " + model + " | " + year);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<Integer, Brand> brands = new HashMap<>();
        brands.put(1, new Brand("Toyota", "Let's Go Places", "TOYOTA"));
        brands.put(2, new Brand("BMW", "The Ultimate Driving Machine", "BMW"));
        brands.put(3, new Brand("Tesla", "Electric Innovation", "TESLA"));
        brands.put(4, new Brand("Ford", "Built Ford Tough", "FORD"));
        brands.put(5, new Brand("Mercedes-Benz", "The Best or Nothing", "MERCEDES"));

        System.out.println("Available Car Brands:");
        for (Map.Entry<Integer, Brand> entry : brands.entrySet()) {
            System.out.println(entry.getKey() + ". " + entry.getValue().getName());
        }

        System.out.print("\nChoose a brand number: ");
        int choice = scanner.nextInt();
        scanner.nextLine();

        Brand selectedBrand = brands.get(choice);

        if (selectedBrand == null) {
            System.out.println("Invalid brand selected.");
            scanner.close();
            return;
        }

        System.out.print("Enter car model: ");
        String model = scanner.nextLine();

        System.out.print("Enter car year: ");
        int year = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Enter car color: ");
        String color = scanner.nextLine();

        Car car = new Car(selectedBrand, model, year, color);
        car.displayBranding();

        scanner.close();
    }
}