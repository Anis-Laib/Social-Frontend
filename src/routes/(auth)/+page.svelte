<script>
    import { Input, Label, Button } from 'flowbite-svelte';
</script>

<div class="flex flex-col gap-8">
    <h1 class="text-3xl text-center">Login</h1>
    <form method="post" class="flex flex-col gap-4">
        <div>
            <Label for="email" class="mb-2">Email address</Label>
            <Input type="email" name="email" id="email" placeholder="john.doe@company.com" required />
          </div>
          <div class="mb-6">
            <Label for="password" class="mb-2">Password</Label>
            <Input type="password" name="password" id="password" placeholder="•••••••••" required />
          </div>
          <Button type="submit">Login</Button>
    </form>

    <Button color="dark" href="/register">Register</Button>

</div>